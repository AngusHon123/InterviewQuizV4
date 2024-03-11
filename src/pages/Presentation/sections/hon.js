<Grid container spacing={3}>
  <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
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
            Standard Mount Kinabalu Climb
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

  {/* 右侧 */}
  <Grid item xs={12} lg={4}>
    <MKTypography variant="h2" fontWeight="bold">
      Huge collection of sections
    </MKTypography>
    <MKTypography variant="body1" color="text">
      We have created multiple options for you to put together and customise into pixel perfect
      pages.
    </MKTypography>
  </Grid>
</Grid>;
