import { useDashboard } from '../context/DashboardContext';
import { saveAs } from 'file-saver';
import { Parser } from 'json2csv';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export default function ExportButtons() {
  const { articles } = useDashboard();

  const handleCSV = () => {
    const parser = new Parser();
    const csv = parser.parse(articles);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'articles.csv');
  };

  const handlePDF = () => {
    const doc = new jsPDF();
    doc.text('Articles Report', 10, 10);
    autoTable(doc, { html: '#export-table' });
    doc.save('articles.pdf');
  };

  return (
    <div className="flex gap-4 my-6 items-center">
      <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleCSV}>
        Export CSV
      </button>
      <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={handlePDF}>
        Export PDF
      </button>
    </div>
  );
}
