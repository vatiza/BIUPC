import {
    Spinner,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow
} from "@nextui-org/react";

import React from "react";
import { Link } from "react-router-dom";
import GetSingleTeam from "../../../utils/getSingleTeam";

const CfStandingTable = () => {
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
        onValueChange={setSelectedColor}
        color={selectedColor}
        selectionMode="single"
        defaultSelectedKeys={["2"]}
        aria-label="Example static collection table"
      >
        <TableHeader>
          <TableColumn>#</TableColumn>
          <TableColumn>Handle</TableColumn>
          <TableColumn>Rating</TableColumn>
          <TableColumn>Solve Count</TableColumn>
        </TableHeader>
        <TableBody>
          {teams.map((team, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                <Link to="/">{team.name}</Link>
              </TableCell>
              <TableCell>12 oct 2024</TableCell>
              <TableCell>{index + 1}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CfStandingTable;
