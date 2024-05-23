/* eslint-disable react/prop-types */
import { Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";

// eslint-disable-next-line react/prop-types
function MovieCardDetailsTable({ movieDetails, movieCredits }) {
  // eslint-disable-next-line react/prop-types
  const { genres, runtime, release_date } =
    movieDetails;
  // eslint-disable-next-line react/prop-types
  const { cast } = movieCredits;

  const actors = cast
    // eslint-disable-next-line react/prop-types
    .filter((actor) => actor.known_for_department === "Acting")
    .map((actor) => actor.name).slice(0, 10).join(", ")

  return (
    <TableContainer>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableBody>
          <TableRow>
            <TableCell>Страна</TableCell>
            {/* <TableCell align="right">{production_countries[0].name}</TableCell> */}
          </TableRow>
          <TableRow>
            <TableCell>Жанр</TableCell>
            <TableCell align="right">
              {genres.map((genre) => genre.name).join(", ")}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Длительность</TableCell>
            <TableCell align="right">{runtime} мин.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Год выхода</TableCell>
            <TableCell align="right">
              {new Date(release_date).getFullYear()}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>В ролях:</TableCell>
            <TableCell align="right">{actors}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MovieCardDetailsTable;