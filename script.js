const companyImages = {
    empresa1: 'url_para_empresa1.jpg',
    empresa2: 'url_para_empresa2.jpg'
    empresa3: 'url_para_empresa3.jpg'
    // Adicione mais URLs de imagens conforme necessário
};

function showImage() {
    const companyName = document.getElementById('company').value;
    const companyImage = document.getElementById('companyImage');
    
    if (companyImages[companyName]) {
        companyImage.src = companyImages[companyName];
    } else {
        companyImage.src = '';
    }
}

function generatePDF() {
    const companyName = document.getElementById('company').value;
    const pdfFileName = document.getElementById('pdfFileName').value;
    const companyImage = companyImages[companyName];

    if (!companyImage) {
        alert('Selecione uma empresa válida.');
        return;
    }

    const pdf = new jsPDF();
    pdf.text(`Informações da Empresa: ${companyName}`, 20, 10);
    pdf.addImage(companyImage, 'JPEG', 20, 20, 150, 0);
    pdf.save(`${pdfFileName}.pdf`);
}
