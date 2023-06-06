// Imports
import './LineChart.css';
import { useTranslation } from 'react-i18next';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
    Colors
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
    Colors
);

// Component
function LineChart(props) {
    // Declarations
    const { t } = useTranslation();
    const options = {
        plugins: {
            legend: true
        },
        interaction: { mode: 'index' },
        onHover: function (event) {
            const points = this.getElementsAtEventForMode(
                event,
                'index', { axis: 'x', intersect: true },
                false
            );
            if (points.length) event.native.target.style.cursor = 'pointer';
            else event.native.target.style.cursor = 'default';
        },
        onClick: function (event) {
            const click = this.getElementsAtEventForMode(
                event,
                'nearest',
                { intersect: true },
                true
            );
            console.log('click', click);
            console.log('datasetIndex', click[0].datasetIndex);
            console.log('index', click[0].index);
            console.log('label', this.data.labels[click[0].index]);
            console.log('innerlabel', this.data.datasets[click[0].datasetIndex].label);
            console.log('value', this.data.datasets[click[0].datasetIndex].data[click[0].index]);
        }
    };
    const data = {
        labels: props.arrayLabels,
        datasets: props.arrayDataSets
    };

    return (
        <div className='lineChart col-4'>
            <p className='highText chartTitle'>{t(props.title)}:</p>
            <Line
                options={options}
                data={data}
            ></Line>
        </div>
    );
}

// Exportation
export default LineChart;