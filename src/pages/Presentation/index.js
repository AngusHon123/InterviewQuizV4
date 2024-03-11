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
import Card from "@mui/material/Card";

// Anji Travel Agency React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Anji Travel Agency React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";
import Testimonials from "pages/Presentation/sections/Testimonials";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/examples/1.jpeg";

function Presentation() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "Free Register Member",
          color: "info",
        }}
        sticky
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              2024 Sabah Mount Kinabalu Climbing Package{" "}
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Counters />
        <Information />
        <Container sx={{ mt: 6 }}></Container>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="flag"
                title="Mount Kinabalu Budget Climb"
                description="The 2-day and 1-night package can only be booked one month before the climbing period. That is to say, if you plan to climb in March, the 2-day and 1-night package can only be booked in February. However, all seats are given priority to the 3-day and 2-night package. If the climbing quota is full, there will be no seats even if you book a month in advance."
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/overview/material-kit/",
                  label: "Go Detail",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="precision_manufacturing"
                title="Mount Kinabalu Climb"
                description="Explore the majestic Mount Kinabalu with our 3-day-2-night adventure, offering the same thrilling climb as the 2-day-1-night package. The key difference lies in the added comfort of spending the first night at the mountain base, eliminating the need for a 2-hour journey from Kota Kinabalu to the Kinabalu Park on the second day. This allows you to commence your ascent directly from the park, saving time and energy."
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/overview/datepicker/",
                  label: "Go Detail",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="apps"
                title="Mount Kinabalu Climb – Via Ferrata"
                description="Via Ferrata actually means railway in Italian. Railway activities include building stairs, rails, bridges, rock climbing, etc. There are different railway facilities around the world, and the Via Ferrata is the highest in the world. Climbers who participate in the iron cable package can experience the first and highest railway built in Asia, and only climbers who participate in the railway can see the unique beauty. The via ferrata package has two routes, allowing both experienced and inexperienced climbers to have the opportunity to participate and leave a great experience!"
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
                  label: "Go Detail",
                }}
              />
            </Grid>
          </Grid>
        </Container>
        <Testimonials />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
