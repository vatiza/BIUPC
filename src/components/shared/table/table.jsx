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

const PartiTable = () => {
  const [teams, loading] = GetSingleTeam();

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
        color={selectedColor}
        selectionMode="single"
        defaultSelectedKeys={["2"]}
        aria-label="Example static collection table"
      >
        <TableHeader>
          <TableColumn>#</TableColumn>
          <TableColumn>Name</TableColumn>
          <TableColumn>Count</TableColumn>
          <TableColumn>Division</TableColumn>
          <TableColumn>Email</TableColumn>
        </TableHeader>
        <TableBody>
          {teams.map((team, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{team.name}</TableCell>
              <TableCell>{index + 3}</TableCell>
              <TableCell>Senior</TableCell>
              <TableCell>{team.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PartiTable;
