/*
=========================================================
* Anji Travel Agency React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023Hon (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Anji Travel Agency React components
import MKBox from "components/MKBox";

// Anji Travel Agency React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

function Counters() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={6}
              suffix="+"
              title="Package"
              description="Include Standard Mount Kinabalu Climb, Mount Kinabalu Budget Climb and Mount Kinabalu Climb – Via Ferrata"
            />
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
            <DefaultCounterCard
              count={4}
              suffix="+"
              title="Mount Kailash Mountain Climbing Certificate"
              description="Include color and black white mountaineering certificate"
            />
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={7}
              suffix="+"
              title="Package price"
              description="The lowest price starts from MYR 2040"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
