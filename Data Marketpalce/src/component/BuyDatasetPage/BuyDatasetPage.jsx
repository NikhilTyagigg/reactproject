// BuyDatasetPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './BuyDatasetPage.module.css';

const BuyDatasetPage = () => {
  const [datasets, setDatasets] = useState([
    { id: 1, name: 'Dataset A', price: 10 },
    { id: 2, name: 'Dataset B', price: 15 },
    { id: 3, name: 'Dataset C', price: 20 },
  ]);

  const [selectedDataset, setSelectedDataset] = useState(null);
  const [paymentModalVisible, setPaymentModalVisible] = useState(false);

  const handleBuyClick = (dataset) => {
    setSelectedDataset(dataset);
    openPaymentModal();
  };

  const openPaymentModal = () => {
    setPaymentModalVisible(true);
  };

  const closePaymentModal = () => {
    setPaymentModalVisible(false);
  };

  const handleAccuracyCheck = () => {
    // Implement logic to check the accuracy of the selected dataset
    // This can include navigating to a separate accuracy check page
    // or showing a pop-up/modal for accuracy verification
    console.log(`Checking accuracy for dataset: ${selectedDataset.name}`);
    // Close the payment modal after accuracy check
    closePaymentModal();
  };

  return (
    <div className={styles.buyDatasetPage}>
      <h2>Available Datasets</h2>
      <ul className={styles.datasetList}>
        {datasets.map((dataset) => (
          <li key={dataset.id} className={styles.datasetItem}>
            <p>{dataset.name}</p>
            <p>${dataset.price}</p>
            <button onClick={() => handleBuyClick(dataset)} className={styles.buyButton}>
              Buy
            </button>
          </li>
        ))}
      </ul>

      {/* Payment Modal */}
      {paymentModalVisible && (
        <div className={styles.paymentModal}>
          <h3>Payment Gateway</h3>
          <p>Amount: ${selectedDataset?.price}</p>
          <button onClick={handleAccuracyCheck}>Check Accuracy</button>
          <button onClick={closePaymentModal}>Close</button>
        </div>
      )}
    </div>
  );
};

export default BuyDatasetPage;
