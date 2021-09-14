import { ResponsiveTreeMap } from '@nivo/treemap'
import data from './data.js'

const TreeMap = () => (
  <div className="chart">
     <ResponsiveTreeMap
        data={{data}}
        identity="name"
        value="loc"
        valueFormat=".02s"
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        labelSkipSize={12}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.2 ] ] }}
        parentLabelTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.1 ] ] }}
    />

    <style jsx>{`
      .chart {
          height:100vh;
          width:100vw;
      }

      .chart:hover {
          box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
      }
  `}</style>

  </div>
);

export default TreeMap;
