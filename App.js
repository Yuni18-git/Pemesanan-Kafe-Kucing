import { ScrollView, StyleSheet, Text } from "react-native";
import MenuItem from "./MenuItem";
import OrderSummary from "./OrderSummary";
import React, { useState } from "react";

const DaftarMenu = [
  { id: "1", nama: "Kopi Susu Catnip", harga: 20000 },
  { id: "2", nama: "Matcha Paw Latte", harga: 25000 },
  { id: "3", nama: "Croissant Ikan Tuna", harga: 18000 },
];

const App = () => {
  const [totalPesanan, setTotalPesanan] = useState(0);

  function tambahTotalPesanan() {
    setTotalPesanan(totalPesanan + 1);
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}>

      <Text style={styles.title}>Kafe Kucing</Text>
      <Text style={styles.subtitle}>Pilih menu yang kamu mau!</Text>
      {DaftarMenu.map((menu) => (
        <MenuItem
          style={styles.card}
          key={menu.id}
          nama={menu.nama}
          harga={menu.harga}
          onTambahPesanan={tambahTotalPesanan}
        ></MenuItem>
      ))}
      <OrderSummary totalCount={totalPesanan}></OrderSummary>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 48,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    color: "#666",
    marginBottom: 24,
  },
  text: {
    fontSize: 16,
  },
});

export default App;
