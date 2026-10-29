import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";

const MenuItem = ({ nama, harga, onTambahPesanan }) => {
  const [qty, setQty] = useState(0);

  function tambahPesanan() {
    setQty(qty + 1);
    onTambahPesanan();
  }

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{nama}</Text>
      <Text style={styles.text}>Harga: Rp{harga.toLocaleString("id-ID")}</Text>
      <Text style={styles.text}>Jumlah: {qty}</Text>
      <Button title={"Tambah Pesanan"} color={"#0079ca"} onPress={tambahPesanan}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "#e4f2f7",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#dbdbdb",
    marginBottom: 12,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0079ca",
  },
  text: {
    color: "#000",
    fontsize: 16,
    marginBottom: 8,
  },
});

export default MenuItem;
