import { PieChart } from "@mui/x-charts/PieChart";

import { clubData } from "../../DummyData/clubChartsData";
import ClubsChartStyles from "./ClubsChart.module.scss";
import {
  Box,
  Paper,
  Table,
  Typography,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const ClubsChart = () => {
  return (
    <Box className={ClubsChartStyles.clubs}>
      <Typography className={ClubsChartStyles.clubsChartHeading}>
        Victorious Club/Team in Matches
      </Typography>

      <Box className={ClubsChartStyles.clubsChart}>
        <Box>
          <PieChart
            series={[
              {
                data: clubData,
              },
            ]}
            width={740.39}
            height={740.39}
          />
        </Box>
        <Box>
          <TableContainer className={ClubsChartStyles.table} component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow className={ClubsChartStyles.tableHead}>
                  <TableCell>Teams</TableCell>
                  <TableCell align="right">Champions</TableCell>
                  <TableCell align="right">Runners-Up</TableCell>
                  <TableCell align="right">Last Win</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {clubData.map((row) => (
                  <TableRow key={row.id} className={ClubsChartStyles.tableBody}>
                    <TableCell
                      className={ClubsChartStyles.teamContainer}
                      component="th"
                      scope="row"
                    >
                      <Box
                        className={ClubsChartStyles.teamColor}
                        style={{ backgroundColor: row.color }}
                      ></Box>
                      <Box>{row.Teams}</Box>
                    </TableCell>
                    <TableCell align="right">{row.Champions}</TableCell>
                    <TableCell align="right">{row.RunnersUp}</TableCell>
                    <TableCell align="right">{row.Lastwin}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};
export default ClubsChart;
