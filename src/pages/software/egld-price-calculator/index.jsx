import React, { useContext, useEffect, useState } from 'react';
import {
  Card,
  Container, FormControl, InputLabel, MenuItem, Select, TextField,
} from '@material-ui/core';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
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
        setSupportedCurrencies(res.data);
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
      <PageHeader title="Elrond (EGLD) Price Calculator" subTitle="Simple Elrond (EGLD) price calculator" />
      <Container maxWidth="md" style={{ marginTop: 10 }}>
        <Card>
          <CardContent>
            {loading ? <LoadingBar /> : (
              <Grid container spacing={2}>
                <Grid item xs={12} md={12} lg={12}>
                  <Grid container>
                    <Grid item xs={12} md={10} lg={10}>
                      <TextField
                        variant="outlined"
                        label="Amount"
                        value={egld}
                        type="number"
                        fullWidth
                        onChange={changeEgldAmount}
                      />
                    </Grid>
                    <Grid item xs={12} md={2} lg={2}>
                      <FormControl
                        variant="outlined"
                        fullWidth
                      >
                        <InputLabel>Currency</InputLabel>
                        <Select
                          value="egld"
                          label="Currency"
                          fullWidth
                        >
                          <MenuItem value="egld">
                            <em>EGLD</em>
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <Grid container>
                    <Grid item xs={12} md={10} lg={10}>
                      <TextField
                        variant="outlined"
                        label="Amount"
                        value={currencyAmount}
                        type="number"
                        fullWidth
                        onChange={changeCurrencyAmount}
                      />
                    </Grid>
                    <Grid item xs={12} md={2} lg={2}>
                      <FormControl
                        variant="outlined"
                        fullWidth
                      >
                        <InputLabel>Currency</InputLabel>
                        <Select
                          value={currency}
                          label="Currency"
                          fullWidth
                          onChange={changeCurrency}
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
                            )) : null}
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </CardContent>
        </Card>
      </Container>
      <Snackbar open={!!error} autoHideDuration={6000} onClose={closeSnackbar}>
        {error
          ? (
            <MuiAlert elevation={6} variant="filled" severity="error" onClose={closeSnackbar}>
              {error.message}
            </MuiAlert>
          )
          : null}
      </Snackbar>
    </Layout>
  );
};

export default EgldPriceCalculator;
