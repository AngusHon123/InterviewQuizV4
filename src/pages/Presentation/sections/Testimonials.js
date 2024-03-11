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
import MKTypography from "components/MKTypography";

// Anji Travel Agency React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={5}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <br />
          <Grid>
            <MKTypography variant="h2">Successfully received: </MKTypography>
          </Grid>
          <Grid>
            <MKTypography variant="h2" color="info" textGradient mb={2}>
              1,679+ tourists
            </MKTypography>
          </Grid>
          <Grid>
            <MKTypography variant="body1" color="text" mb={2}>
              Many families, hikers, and individual climbers prefer our services.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Nick Willever"
              date="1 day ago"
              review="My experience climbing Mount Kinabalu was nothing short of breathtaking! The stunning landscapes, challenging trails, and the sense of achievement at the summit made it an unforgettable journey. The guides were knowledgeable, ensuring our safety while sharing fascinating stories about the mountain's rich history. The accommodations were comfortable, providing a much-needed rest after each day's climb. Highly recommended for adventure seekers and nature enthusiasts!"
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Shailesh Kushwaha"
              date="1 week ago"
              review="Climbing Mount Everest has been a dream of mine, and the journey exceeded all expectations. The sheer majesty of the Himalayas, coupled with the physical and mental challenges, created a profound and life-changing experience. The support from the expedition team was exceptional, making the climb as safe and enjoyable as possible. The camaraderie among fellow climbers added a special touch to the adventure. An unparalleled adventure for those seeking the ultimate mountaineering challenge"
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Samuel Kamuli"
              date="3 weeks ago"
              review="Scaling the heights of Machu Picchu was a remarkable adventure filled with awe-inspiring views and cultural richness. The Inca Trail offered a perfect balance of challenging ascents and historical wonders. The local guides provided insightful commentary on Incan history and traditions, enhancing the overall experience. Camping under the stars, waking up to breathtaking sunrises, and exploring ancient ruins made this trek a once-in-a-lifetime journey. A must-do for those seeking a unique blend of nature and history."
              rating={5}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} />
      </Container>
    </MKBox>
  );
}

export default Information;
