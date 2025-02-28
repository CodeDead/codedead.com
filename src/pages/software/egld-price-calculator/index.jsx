import React, { useContext, useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import Grid from '@mui/material/Grid2';
import CardContent from '@mui/material/CardContent';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { setPageIndex } from '../../../reducers/MainReducer/Actions';
import PageHeader from '../../../components/PageHeader';
import Layout from '../../../components/Layout';
import { MainContext } from '../../../contexts/MainContextProvider';
import LoadingBar from '../../../components/LoadingBar';

const EgldPriceCalculator = () => {
  const [, dispatch] = useContext(MainContext);

  const [pricePerEgld, setPricePerEgld] = useState(null);
  const [currency, setCurrency] = useState('usd');
  const [supportedCurrencies, setSupportedCurrencies] = useState(null);

  const [egld, setEgld] = useState(1);
  const [currencyAmount, setCurrencyAmount] = useState(0);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [priceDate, setPriceDate] = useState(null);

  /**
   * Close the snackbar
   */
  const closeSnackbar = () => {
    setError(null);
  };

  /**
   * Get a list of supported currencies
   * @param override True if the loading indicator should be ignored, otherwise false
   */
  const getSupportedCurrencies = (override) => {
    if (loading && !override) return;

    setLoading(true);
    setError(null);
    setSupportedCurrencies(null);

    axios.get('https://api.coingecko.com/api/v3/simple/supported_vs_currencies')
      .then((res) => {
        setSupportedCurrencies(res.data.sort((a, b) => a.localeCompare(b)));
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  /**
   * Get the price for EGLD
   * @param override True if the loading indicator should be ignored, otherwise false
   * @param changeEgld Change the EGLD amount or not
   * @param newCurrency The currency for which the price should be retrieved
   */
  const getEgldPrice = (override, changeEgld, newCurrency) => {
    if (loading && !override) return;

    setLoading(true);
    setError(null);
    setPricePerEgld(null);

    axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=elrond-erd-2&vs_currencies=${newCurrency}`)
      .then((res) => {
        setPriceDate(new Date());
        const values = Object.values(res.data['elrond-erd-2']);
        const ppegld = parseFloat(values[0]);

        setPricePerEgld(ppegld);
        if (changeEgld) {
          setEgld((1 / ppegld) * currencyAmount);
        } else {
          setCurrencyAmount(egld * ppegld);
        }
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  /**
   * Change the EGLD amount
   * @param e
   */
  const changeEgldAmount = (e) => {
    if (e.target.value < 0) return;

    setEgld(e.target.value);
    setCurrencyAmount(e.target.value * pricePerEgld);
  };

  /**
   * Change the amount of the selected currency
   * @param e The event argument
   */
  const changeCurrencyAmount = (e) => {
    if (e.target.value < 0) return;

    setEgld((1 / pricePerEgld) * e.target.value);
    setCurrencyAmount(e.target.value);
  };

  /**
   * Change the currency
   * @param e The event argument
   */
  const changeCurrency = (e) => {
    if (!e.target.value) return;

    setCurrency(e.target.value);
    getEgldPrice(false, false, e.target.value);
  };

  useEffect(() => {
    dispatch(setPageIndex(-1));
    getSupportedCurrencies(false);
    getEgldPrice(true, false, currency);
  }, []);

  return (
    <Layout>
      <PageHeader title="MultiversX (EGLD) Price Calculator" subTitle="Simple MultiversX (EGLD) price calculator" />
      <Container maxWidth="md" sx={{ mt: 5 }}>
        <Card>
          <CardContent>
            {loading ? <LoadingBar /> : (
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 12, lg: 12 }}>
                  <Grid container>
                    <Grid size={{ xs: 12, md: 10, lg: 10 }} style={{ flexGrow: 1 }}>
                      <TextField
                        variant="outlined"
                        label="Amount"
                        value={egld}
                        type="number"
                        sx={{ mt: 1 }}
                        fullWidth
                        onChange={changeEgldAmount}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, md: 2, lg: 2 }}>
                      <FormControl
                        variant="outlined"
                        sx={{ mt: 1 }}
                        fullWidth
                      >
                        <InputLabel>Currency</InputLabel>
                        <Select
                          value="egld"
                          label="Currency"
                          fullWidth
                          variant="outlined"
                        >
                          <MenuItem value="egld">
                            <em>EGLD</em>
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid size={12}>
                  <Grid container>
                    <Grid size={{ xs: 12, md: 10, lg: 10 }} style={{ flexGrow: 1 }}>
                      <TextField
                        variant="outlined"
                        label="Amount"
                        value={currencyAmount}
                        type="number"
                        sx={{ mt: 1 }}
                        fullWidth
                        onChange={changeCurrencyAmount}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, md: 2, lg: 2 }}>
                      <FormControl
                        variant="outlined"
                        sx={{ mt: 1 }}
                        fullWidth
                      >
                        <InputLabel>Currency</InputLabel>
                        <Select
                          value={currency}
                          label="Currency"
                          fullWidth
                          onChange={changeCurrency}
                          variant="outlined"
                        >
                          <MenuItem value="">
                            Select a currency
                          </MenuItem>
                          {supportedCurrencies && supportedCurrencies.length > 0
                            ? supportedCurrencies.map((item) => (
                              <MenuItem
                                key={item}
                                value={item}
                              >
                                {item.toUpperCase()}
                              </MenuItem>
                            )) : (
                              <MenuItem value="usd">
                                USD
                              </MenuItem>
                            )}
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </CardContent>
        </Card>
        {priceDate ? (
          <>
            <Typography variant="subtitle1" gutterBottom>
              Last update:
              {` ${priceDate.toLocaleString()}`}
            </Typography>
            <a href="https://coingecko.com" target="_blank" rel="noopener noreferrer">
              Source
            </a>
          </>
        ) : null}
      </Container>
      <Snackbar open={!!error} autoHideDuration={6000} onClose={closeSnackbar}>
        <Alert elevation={6} variant="filled" severity="error" onClose={closeSnackbar}>
          {error ? error.message : null}
        </Alert>
      </Snackbar>
    </Layout>
  );
};

export default EgldPriceCalculator;
