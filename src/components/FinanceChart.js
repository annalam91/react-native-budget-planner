import React from 'react';
import { View } from 'react-native';
import { VictoryPie, VictoryTooltip, VictoryLabel, VictoryChart, VictoryScatter, VictoryTheme, VictoryBar} from "../../Victory";

function FinanceChart({navigation}) {
    
    const data = [
        { x: "Cats", y: 35 },
        { x: "Dogs", y: 40 },
        { x: "Birds", y: 55 }
      ];

    return (
        <View>
       <VictoryPie
        colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
        data={data}
/>
      </View>
    );
};

export default FinanceChart;
