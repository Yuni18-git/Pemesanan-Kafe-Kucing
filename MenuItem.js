import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";

const MenuItem = ({ nama, harga, onTambahPesanan }) => {
  const [qty, setQty] = useState(0);

  function tambahPesanan() {
    setQty(qty + 1);
    onTambahPesanan();
  }

  return (
    <View style={style.card}>
      <Text style={style.title}>{nama}</Text>
      <Text style={style.text}>Harga: {harga}</Text>
      <Text style={style.text}>Jumlah: {qty}</Text>
      <Button title={"Tambah Pesanan"} color={"#0079ca"} onPress={tambahPesanan}></Button>
    </View>
  );
};

const style = StyleSheet.create({
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
    color: "#0000",
    fontsize: 16,
    marginBottom: 8,
  },
});

export default MenuItem;
