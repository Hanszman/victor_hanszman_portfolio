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
    const options = {};
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