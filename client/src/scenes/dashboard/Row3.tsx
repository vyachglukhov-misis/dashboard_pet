

import { BoxHeader } from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox"
import FlexBetween from "@/components/FlexBetween";
import { useGetProductsQuery } from "@/state/api";
import { Box, Typography, useTheme } from "@mui/material"
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import { useMemo } from "react";
import { Cell, Pie, PieChart } from "recharts";


const Row3 = () => {
  const { palette } = useTheme();
  const pieColors = [palette.primary[800], palette.primary[500]];
  const { data } = useGetProductsQuery("asd");

  const pieChartData = useMemo(()=> {
    if(data){
      return Object.entries(data.expensesByCategory).map(([key, value])=> {
        return [
          {
            name: key,
            value: value
          },
          {
            name: `${key} of Total`,
            value: data.totalinfo.totalExpenses-value
          }
        ]
      })
    }
  }, [data])
  console.log(pieChartData)
  const productColumns = [
    {
      field: "_id",
      headerName: "id",
      flex: 1,
    },
    {
      field: "expense",
      headerName: "Expense",
      flex: 0.5,
      renderCall: (params: GridCellParams) => `$${params.value}`,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 0.5,
      renderCall: (params: GridCellParams) => `$${params.value}`,
    }
  ]
  const transactionColumns = [
    {
      field: "_id",
      headerName: "id",
      flex: 1,
    },
    {
      field: "buyer",
      headerName: "Buyer",
      flex: 0.67,
    },
    {
      field: "amount",
      headerName: "Amount",
      flex: 0.35,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
    {
      field: "productIds",
      headerName: "Count",
      flex: 0.1,
      renderCell: (params: GridCellParams) => (params.value as Array<string>).length
    }
  ]

  return (
    <>
      <DashboardBox bgcolor="white" gridArea="g">
        <BoxHeader
          title="List of Products"
          sideText={`${data?.products.length} products`}
        />
        <Box
          mt="0.5rem"
          p="0 0.5rem"
          height="75%"
          sx={{
            "& .MuiDataGrid-root": {
              color: palette.grey[300],
              border: "none"
            },
            "& .MuiDataGrid-cell": {
              borderBottom: `1px solid ${palette.grey[800]} !important`
            },
            "& .MuiDataGrid-columnHeader": {
              borderBottom: `1px solid ${palette.grey[800]} !important`
            },
            "& .MuiDataGrid-columnSeparator": {
              visability: "hidden"
            }
          }}
        >
          <DataGrid
            columnHeaderHeight={25}
            rowHeight={35}
            hideFooter={true}
            rows={data?.products || []}
            columns={productColumns}
          />
        </Box>
      </DashboardBox>
      <DashboardBox bgcolor="white" gridArea="h">
        <BoxHeader
          title="Recent Orders"
          sideText={`${data?.transactions.length} latest transactions`}
        />
        <Box
          mt="1rem"
          p="0 0.5rem"
          height="80%"
          sx={{
            "& .MuiDataGrid-root": {
              color: palette.grey[300],
              border: "none"
            },
            "& .MuiDataGrid-cell": {
              borderBottom: `1px solid ${palette.grey[800]} !important`
            },
            "& .MuiDataGrid-columnHeader": {
              borderBottom: `1px solid ${palette.grey[800]} !important`
            },
            "& .MuiDataGrid-columnSeparator": {
              visability: "hidden"
            }
          }}
        >
          <DataGrid
            columnHeaderHeight={15}
            rowHeight={35}
            hideFooter={true}
            rows={data?.transactions || []}
            columns={transactionColumns}


          />
        </Box>
      </DashboardBox>
      <DashboardBox gridArea="i" sx={{
        "& .css-rrxtos": {
          margin: "10px"
        }
      }}>
        <BoxHeader title="Expense Breakdown By Category" sideText="4%"/>
        <FlexBetween gap="0.5rem" p="0 1rem" textAlign="center">
          {pieChartData?.map((data, i)=> (
            <Box key={`${data[0].name}-${i}`}>
            <PieChart
              width={95}
              height={90}
            >
              <Pie
                stroke="none"
                data={data}
                innerRadius={18}
                outerRadius={35}
                paddingAngle={2}
                dataKey="value"
              >
                {pieChartData.map((_entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={pieColors[index]} />
                ))}
              </Pie>
            </PieChart>
            <Typography variant="h5">
              {data[0].name}
            </Typography>
          </Box>
          ))}
        </FlexBetween>
      </DashboardBox>
      <DashboardBox bgcolor="white" gridArea="j">
      <BoxHeader title="Overall Summary and Explanation Data" sideText="+15%" />
      <Box height="15px" margin="1.25rem 1rem 0.4rem 1rem" bgcolor={palette.primary[800]} borderRadius="1rem">
        <Box height="15px" bgcolor={palette.primary[600]} borderRadius="1rem" width="40%">

        </Box>
      </Box>
      <Typography margin="0 1rem" variant="h6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quis repellendus et sequi quasi. Illo mollitia laborum rem quod hic corporis voluptatum placeat in voluptate! Natus quibusdam temporibus possimus quas.
      </Typography>
      </DashboardBox>
    </>
  )
}

export default Row3