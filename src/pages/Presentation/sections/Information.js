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

// Anji Travel Agency React components
import MKBox from "components/MKBox";

// Anji Travel Agency React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import MKTypography from "components/MKTypography";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={5} lg={3} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Mount Kinabalu
                    <br />
                    Package Options
                  </>
                }
                description="Kinabalu packages are basically divided into three types:"
              />
              <RotatingCardBack
                image={bgBack}
                title="Discover More"
                description={
                  <>
                    Standard Mount Kinabalu Climb Package
                    <br />
                    Mount Kinabalu Budget Climb
                    <br />
                    Mount Kinabalu Climb – Via Ferrata
                  </>
                }
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "start with header",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ mx: "auto" }}>
            <MKTypography variant="h2" fontWeight="bold">
              Kinabalu packages are basically divided into three types:
            </MKTypography>
            <MKTypography variant="body3" color="text" sx={{ fontSize: "0.875rem" }}>
              <>
                1.Standard Mount Kinabalu Climb
                <br />
                2.Mount Kinabalu Budget Climb
                <br />
                3.Mount Kinabalu Climb – Via Ferrata
                <br />
                <br />
                These three packages will allow you to arrive at Layang Layang (2740 meters) on KM4
                first, and then go to their respective lodges.
                <br />
                <br />
                1.Standard climbing accommodation: Laban Rata Resthouse (3272 meters)
                <br />
                2.Cheap Climbing Stay: Panalaban Resthouse (3284m)
                <br />
                3.Via ferrata climbing accommodation: Pendant Hut Resthouse (3289 meters)
                <br />
                <br />
                The three inns are only a 10-minute walk apart. However, dinner is all eaten in the
                same restaurant, and only guests with the via ferrata climbing package will have
                breakfast in the restaurant of the hostel. Then the next day we can climb to the top
                and climb to the highest peak in Borneo - Low’s Peak. Those who choose the via
                ferrata package will do the via ferrata activity after reaching the summit and then
                return to have breakfast.
                <br />
                <br />
                Generally, it takes at least two days to climb Mount Kinabalu, but it is recommended
                to use three days as it will be more sufficient and stable, allowing you to
                gradually adapt to the changes in environmental climate when you climb Mount
                Kinabalu the next day.
              </>
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
