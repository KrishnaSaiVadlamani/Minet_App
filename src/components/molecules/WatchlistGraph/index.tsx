import React from 'react'
import Chart from 'react-apexcharts'
import theme from '../../../theme/index'
import IconWithTypography from '../IconWithTypography'
import { ProfitData, LossData } from '../../../utils/constant'
import IncreasingTrendArrow from '../../../../public/assets/icons/greenIncreasingTrend.svg'
import DecreasingTrendArrow from '../../../../public/assets/icons/redDecreasingTrend.svg'
import { Grid, styled } from '@mui/material'

type Props = {
  profit: boolean
  plValue: string
  height: string
  width?: string
}
const InnerDiv = styled('div')({
  float: 'right',
  marginBottom: '-900px',
})
const Graph = (props) => {
  const { profit, plValue, height, width } = props
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      id: 'graph',
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    stroke: {
      colors: [
        profit
          ? theme.palette.profit.borderColor
          : theme.palette.loss.borderColor,
      ],
      width: 1,
    },
    fill: {
      colors: [
        profit ? theme.palette.profit.fillColor : theme.palette.loss.fillColor,
      ],
      opacity: 1,
      type: 'solid',
    },
    grid: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    dataLabels: {
      enabled: false,
    },
  }
  const series = [
    {
      name: 'series-1',
      data: profit ? ProfitData : LossData,
    },
  ]
  return (
    <Grid container direction="column" data-testid="watchlistGraph">
      <Grid item>
        <InnerDiv>
          <IconWithTypography
            image={profit ? IncreasingTrendArrow : DecreasingTrendArrow}
            imageHeight="9px"
            imageWidth="9px"
            text={plValue}
            iconandtextgap="7px"
            textVariant="overline"
            textColor={
              profit
                ? theme.palette.profit.borderColor
                : theme.palette.loss.borderColor
            }
            textHeight="14px"
            textWidth="31px"
          />
        </InnerDiv>
      </Grid>

      <Grid item>
        <Chart
          options={options}
          series={series}
          type="area"
          height={height}
          width={width}
        />
      </Grid>
    </Grid>
  )
}

export default Graph
