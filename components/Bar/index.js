import { ResponsiveBar } from '@nivo/bar'
import data from './data.js'
import config from './config'

const Bar = () => (
  <div className="chart">
    <ResponsiveBar
      data={data}
      keys={config.keys}
      indexBy="country"
      margin={config.margin}
      padding={0.3}

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
)

export default Bar;