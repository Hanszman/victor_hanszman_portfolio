// Imports
import './PieChart.css';
import { useTranslation } from 'react-i18next';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Colors
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    Colors
);

// Component
function PieChart(props) {
    // Declarations
    const { t } = useTranslation();
    const options = {
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
        <div className='pieChart col-4'>
            <p className='highText chartTitle'>{t(props.title)}:</p>
            <Pie
                options={options}
                data={data}
            ></Pie>
        </div>
    );
}

// Exportation
export default PieChart;