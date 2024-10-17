import {
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import React from "react";
import GetSingleTeam from "../../../utils/getSingleTeam";
const LeaderBoardTable = () => {
  const [teams, loading] = GetSingleTeam();
  const problemNumbers = ["A", "B", "C", "D", "E", "F"];
  const [selectedColor, setSelectedColor] = React.useState("default");
  if (loading)
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );
  return (
    <div className="flex flex-col gap-3 mt-5">
      <Table
        onValueChange={setSelectedColor}
        color={selectedColor}
        selectionMode="single"
        defaultSelectedKeys={["2"]}
        aria-label="Example static collection table"
      >
        <TableHeader>
          <TableColumn>#</TableColumn>
          <TableColumn>Name</TableColumn>
          <TableColumn>Solved</TableColumn>
          {problemNumbers.map((p, index) => (
            <TableColumn key={index}>{p}</TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {teams.map((team, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{team.name}</TableCell>
              <TableCell>{index + 3}</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default LeaderBoardTable;
