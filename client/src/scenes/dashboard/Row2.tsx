import { BoxHeader } from "@/components/BoxHeader"
import DashboardBox from "@/components/DashboardBox"
import FlexBetween from "@/components/FlexBetween"
import { useGetProductsQuery } from "@/state/api"
import { Box, Typography, useTheme } from "@mui/material"
import { useMemo } from "react"
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, ScatterChart, Scatter, ZAxis } from "recharts"

const pieData = [
  {name: "Group A", value: 600},
  {name: "Group B", value: 400},
  
]

const Row2 = () => {
  const {palette} = useTheme()
  const pieColors = [palette.primary[800], palette.primary[300]]
  const {data} = useGetProductsQuery("asd")
  const operationalExpeneses2 = useMemo(() => {
    return (
      data &&
      data.monthlyData.map(({month, nonOperationalExpenses, operationalExpenses})=> {
        return {
          name: month.substring(0,3),
          "Operational Expenses": operationalExpenses,
          "Non Operational Expenses": nonOperationalExpenses

        }
      })
    )
  }, [data])
  const productExpenseData = useMemo(() => {
    return (
      data &&
      data.products.map(({_id, price, expense})=> {
        return {
          _id,
          price,
          expense
        }
      })
    )
  }, [data])
  console.log(data);
  return (
    <>
    <DashboardBox bgcolor="white" gridArea="d">

    <BoxHeader title="Operational vs Non-Operational Expenses" subtitle="top line represents revenue, bottom line represents expeneses" sideText="+4%"/>
      <ResponsiveContainer width="100%" height="100%">
          <LineChart
          width={500}
          height={400}
            data={operationalExpeneses2}
            margin={{ 
              top: 20,
              right: 0,
              left: -10,
              bottom: 55,
            }}
          >
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <XAxis dataKey="name" tickLine={false} style={{fontSize: "10px"}}/>
            <YAxis yAxisId="left" orientation="left" tickLine={false} style={{fontSize: "10px"}} axisLine={false}/>
            <YAxis yAxisId="right" orientation="right" tickLine={false} style={{fontSize: "10px"}} axisLine={false}/>
            <Tooltip wrapperStyle={{color: "black"}} itemStyle={{color: palette.primary[600]}}/>
            <Line yAxisId="left" type="monotone" dataKey="Non Operational Expenses" stroke={palette.tertiary[500]} />
            <Line yAxisId="right" type="monotone" dataKey="Operational Expenses" stroke={palette.primary.main} />
          </LineChart>
      </ResponsiveContainer>

    </DashboardBox>
    <DashboardBox bgcolor="white" gridArea="e">
      <BoxHeader title="Campaigns and Targets" sideText="+4%" />
      <FlexBetween mt="0.25rem" gap="1.5rem" pr="1rem">
    <PieChart
     width={110}
     height={100}
     margin={{ 
      top: 0,
      right: -10,
      left: 10,
      bottom: 0,
     }}
    >
        <Pie
          stroke="none"
          data={pieData}
          innerRadius={18}
          outerRadius={38}
          paddingAngle={2}
          dataKey="value"
        >
          {pieData.map((_entry, index) => (
            <Cell
            key={`cell-${index}`} 
            fill={pieColors[index]} />
          ))}
        </Pie>
      </PieChart>
      <Box ml="-0.7rem" flexBasis="40%" textAlign="center">
      <Typography variant="h5">Target Sales</Typography>
      <Typography variant="h3" m="0.3rem 0" color={palette.primary[300]}>83</Typography>
      <Typography variant="h6">Finance goals of the campaign that is desired</Typography>
      </Box>
      <Box flexBasis="40%">
      <Typography variant="h5">Losses in Revenue</Typography>
      <Typography variant="h6">Loses are down 25%</Typography>
      <Typography variant="h5" mt="0.4rem">Profit Margins</Typography>
      <Typography variant="h6">Margins are up by 30% from last month.</Typography>
      </Box>
      </FlexBetween>
    </DashboardBox>
    <DashboardBox bgcolor="white" gridArea="f">
      <BoxHeader title="Product Prices vs Expenses" sideText="+4%" />
    <ResponsiveContainer width="100%" height="100%">
        <ScatterChart
          margin={{
            top: 20,
            right: 25,
            bottom: 40,
            left: -20,
          }}
        >
          <CartesianGrid stroke={palette.grey[800]}/>
          <XAxis 
            type="number" 
            dataKey="price" 
            name="price"
            axisLine={false}
            tickLine={false}
            style={{fontSize:"10px"}}
            tickFormatter={(v)=> `$${v}`}
          />
          <YAxis 
            type="number" 
            dataKey="expense" 
            name="expense"
            axisLine={false}
            tickLine={false}
            style={{fontSize:"10px"}}
            tickFormatter={(v)=> `$${v}`}
          /> 
          <ZAxis type="number" range={[20]} />
          <Tooltip wrapperStyle={{color: "black"}} itemStyle={{color: palette.primary[600]}}/>
          <Scatter name="Product Expense Ratio" data={productExpenseData} fill={palette.tertiary[500]} />
        </ScatterChart>
      </ResponsiveContainer>


    </DashboardBox>
    </>
  )
}

export default Row2