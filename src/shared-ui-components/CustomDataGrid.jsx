/* eslint-disable no-constant-condition */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/require-default-props */
/* eslint-disable prettier/prettier */
import { Box, TablePagination, styled, useMediaQuery, useTheme } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { GridToolbarContainer } from "@mui/x-data-grid-pro";
import React, { useEffect } from "react";

const StyledGridOverlay = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  "& .ant-empty-img-1": {
    fill: theme.palette.mode === "light" ? "#aeb8c2" : "#262626",
  },
  "& .ant-empty-img-2": {
    fill: theme.palette.mode === "light" ? "#f5f5f7" : "#595959",
  },
  "& .ant-empty-img-3": {
    fill: theme.palette.mode === "light" ? "#dce0e6" : "#434343",
  },
  "& .ant-empty-img-4": {
    fill: theme.palette.mode === "light" ? "#fff" : "#1c1c1c",
  },
  "& .ant-empty-img-5": {
    fillOpacity: theme.palette.mode === "light" ? "0.8" : "0.08",
    fill: theme.palette.mode === "light" ? "#f5f5f5" : "#fff",
  },
}));

function CustomNoRowsOverlay() {
  return (
    <StyledGridOverlay>
      <svg width="120" height="100" viewBox="0 0 184 152" aria-hidden focusable="false">
        <g fill="none" fillRule="evenodd">
          <g transform="translate(24 31.67)">
            <ellipse className="ant-empty-img-5" cx="67.797" cy="106.89" rx="67.797" ry="12.668" />
            <path
              className="ant-empty-img-1"
              d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
            />
            <path className="ant-empty-img-2" d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z" />
            <path
              className="ant-empty-img-3"
              d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
            />
          </g>
          <path
            className="ant-empty-img-3"
            d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
          />
          <g className="ant-empty-img-4" transform="translate(149.65 15.383)">
            <ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815" />
            <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z" />
          </g>
        </g>
      </svg>
      <Box sx={{ mt: 1 }}>Empty</Box>
    </StyledGridOverlay>
  );
}

function CustomToolbar() {
  return (
    <GridToolbarContainer sx={{ display: "flex", justifyContent: "space-between" }}>
      {/* <Box>
        <GridToolbarDensitySelector />
      </Box> */}
    </GridToolbarContainer>
  );
}


export const CustomDataGrid = ({
  page = 1,
  setRowsPerPage,
  rowsPerPage = 10,
  setPage,
  count = 10,
  rows = [],
  columns = [],
  columnVisibilityModel = {},
  setColumnVisibilityModel,
  loading = false,
  allowExport = true,
  print = true,
  csv = true,
  setHeight = null,
  showQuickFilter = true,
  hideFooter = true,
  leftPinning = [],
  rightPinning = [],
}) => {
  // ===============================|| USE THEME  ||========================================== //
  const theme = useTheme();

  // ===============================|| MEDIAQUERY  ||========================================== //
  const matchDownMd = useMediaQuery(theme.breakpoints.down("md"));

  // -------------------pagination handler start--------------
  const handleChangePage = (event, newPage) => {
    if (setPage) {
      setPage(newPage + 1);
    }
  };

  const handleChangeRowsPerPage = (event) => {
    if (setRowsPerPage) {
      setRowsPerPage(parseInt(event.target.value, 10));
    }

    if (setPage) {
      setPage(1);
    }
  };
  // -------------------pagination handler end----------------

  /* This `useEffect` hook is used to hide the "MUI X Missing license key" */
  useEffect(() => {
    const interval = setInterval(() => {
      const hideNode = document.evaluate("//div[text()='MUI X Missing license key']", document, null, XPathResult.ANY_TYPE, null);
      while (true) {
        const hide = hideNode.iterateNext();
        if (hide) {
          hide.style.display = "none";
        } else {
          clearInterval(interval);
          break;
        }
      }
    }, 10);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        "& .css-1ngyb69-MuiDataGrid-root .MuiDataGrid-cell": {
          backgroundColor: "red",
        },
        '& .css-1iyq7zh-MuiDataGrid-columnHeaders': {
          backgroundColor: '#F4F6F8',
        },
        "& .super-app.new": {
          backgroundColor: "rgba(54, 179, 126, 0.16)",
          color: "rgb(27, 128, 106)",
          fontWeight: "700",
          textTransform: "capitalize",
        },
        "& .super-app.paid": {
          backgroundColor: "rgba(54, 179, 126, 0.16)",
          color: "rgb(27, 128, 106)",
          fontWeight: "700",
          textTransform: "capitalize",
        },
        "& .super-app.cancel": {
          backgroundColor: "rgba(255, 86, 48, 0.16)",
          color: "rgb(183, 29, 24)",
          fontWeight: "700",
          textTransform: "capitalize",
        },
        "& .super-app.ready_for_delivery": {
          backgroundColor: "rgba(255, 171, 0, 0.16)",
          color: "rgb(183, 110, 0)",
          fontWeight: "700",
          textTransform: "capitalize",
        },
        "& .super-app.unpaid": {
          backgroundColor: "rgba(255, 86, 48, 0.16)",
          color: "rgb(183, 29, 24)",
          fontWeight: "700",
          textTransform: "capitalize",
        },
        "& .super-app.progress": {
          backgroundColor: "rgba(255, 171, 0, 0.16)",
          color: "rgb(183, 110, 0)",
          fontWeight: "700",
          textTransform: "capitalize",
        },
        "& .super-app.partially_paid": {
          backgroundColor: "rgba(255, 171, 0, 0.16)",
          color: "rgb(183, 110, 0)",
          fontWeight: "700",
          textTransform: "capitalize",
        },
        "& .super-app.delivered": {
          backgroundColor: "#cdeff4",
          color: "#243e65",
          fontWeight: "700",
          textTransform: "capitalize",
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        columnVisibilityModel={columnVisibilityModel}
        onColumnVisibilityModelChange={(newModel) => {
          if (setColumnVisibilityModel) {
            setColumnVisibilityModel(newModel);
          }
        }}
        loading={loading}
        experimentalFeatures={{ columnGrouping: true, lazyLoading: true }}
        hideFooterSelectedRowCount
        disableColumnFilter
        disableChildrenFiltering
        disableChildrenSorting
        disableColumnSelector
        disableMultipleColumnsFiltering
        disableMultipleColumnsSorting
        hideFooter={hideFooter}
        slots={{
          toolbar: CustomToolbar,
          noRowsOverlay: CustomNoRowsOverlay,
        }}
        sx={{
          height: 600,
          " & .MuiDataGrid-virtualScroller": {
            overflow: !rows.length ? "unset" : "auto  ",
          },
        }}
        slotProps={{
          toolbar: {
            showQuickFilter,
            printOptions: {
              disableToolbarButton: !(allowExport && print),
            },
            csvOptions: {
              disableToolbarButton: !(allowExport && csv),
            },
          },
        }}
        initialState={{
          pinnedColumns: { left: leftPinning, right: rightPinning },
        }}
      />
      <TablePagination
        component="div"
        count={count}
        page={page}
        rowsPerPageOptions={[5, 10, 25, 50, 100]}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};
