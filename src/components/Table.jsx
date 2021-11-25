import React from "react";
import { styled } from "stitches.config";
import { Button } from "components/Button";

const TableWrapper = styled("div", {
  border: "solid 1px #d6dadb",
  borderRadius: "6px",
  fontFamily: "ibm plex sans,sans-serif",
  fontSize: "16px",
  padding: "0px",
  margin: "60px 0px",
  width: "auto",
  maxWidth: "100%",
  display: "flex",
  overflowX: "auto",
});

const MainTable = styled("table", {
  display: "table",
  borderCollapse: "separate",
  boxSizing: "border-box",
  textIndent: "initial",
  borderSpacing: "2px",
  width: "100%",

  "& thead": {
    backgroundColor: "rgba(240, 241, 243, 0.64)",

    "& tr": {
      textAlign: "left",
      padding: "6px 16px 6px",
      width: "100%",
    },
  },
});

const TH = styled("th", {
  padding: "10px 3px 10px 5px",
});

const TD = styled("td", {
  padding: "3px 3px 3px 8px",
});

const Actions = styled("td", { display: "flex", justifyContent: "center" });

export const Table = (props) => {
  const { data, onUpdate, onDelete } = props;
  return (
    <TableWrapper>
      <MainTable>
        <thead>
          <tr>
            <TH>Name</TH>
            <TH css={{ width: "15%" }}>Application ID</TH>
            <TH>Scopes</TH>
            <TH>Redirect URL</TH>
            <TH>Actions</TH>
          </tr>
        </thead>
        <tbody>
          {data.map((el, index) => {
            return (
              <tr key={index}>
                <TD>{el.name}</TD>
                <TD>{el.app_id}</TD>
                <TD>{el.scopes.join(", ")}</TD>
                <TD>{el.redirect_uri}</TD>
                <Actions>
                  <Button variant="table" onClick={() => onDelete(index)}>
                    Delete
                  </Button>
                  <Button variant="table" onClick={() => onUpdate(index)}>
                    Update
                  </Button>
                </Actions>
              </tr>
            );
          })}
        </tbody>
      </MainTable>
    </TableWrapper>
  );
};
