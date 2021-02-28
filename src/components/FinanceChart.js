import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {
    VictoryPie,
    VictoryTooltip,
    VictoryLabel,
    VictoryChart,
    VictoryScatter,
    VictoryTheme,
    VictoryBar
} from "../../Victory";

function FinanceChart({navigation}) {

    const data = [
        {
            x: "Cats",
            y: 35
        }, {
            x: "Dogs",
            y: 40
        }, {
            x: "Birds",
            y: 55
        }
    ];

    return (
        <View>
            <Text style={styles.titleText}>WIP</Text>
            <VictoryPie colorScale={
                    [
                        "tomato",
                        "orange",
                        "gold",
                        "cyan",
                        "navy"
                    ]
                }
                data={data}
                width={400}
                height={400}
                innerRadius={68}
                labelRadius={100}/>
        </View>
    );
};

const styles = StyleSheet.create({
    titleText: {
        fontWeight: "800",
        fontSize: 20,
        textAlign: 'center',
        color: 'red'
    }
});


export default FinanceChart;

