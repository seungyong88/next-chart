import { ResponsiveTimeRange } from '@nivo/calendar'
import data from './data.js'

const TimeRange = ( ) => (
  <div className="chart">
     <ResponsiveTimeRange
        data={data}
        from="2018-04-01"
        to="2018-08-12"
        emptyColor="#eeeeee"
        colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
        margin={{ top: 40, right: 40, bottom: 100, left: 40 }}
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'row',
                justify: false,
                itemCount: 4,
                itemWidth: 42,
                itemHeight: 36,
                itemsSpacing: 14,
                itemDirection: 'right-to-left',
                translateX: -85,
                translateY: -240,
                symbolSize: 20
            }
        ]}
    />

    <style jsx>{`
      .chart {
          height:50vh;
          width:60vw;
          background: white;
          box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
          transition: 0.3s;
      }

      .chart:hover {
          box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
      }
  `}</style>

  </div>
);

export default TimeRange;
