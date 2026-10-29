import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";

const OrderSummary = ({ totalCount }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ringkasan Pesanan</Text>
      <Text style={styles.text}>Total item yang dipesan: {totalCount}</Text>
      {totalCount >= 5 && (
        <Text style={styles.diskon}>
          🎉 Selamat! Anda Mendapatkan Diskon 10%
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#0079ca",
    borderRadius: 12,
    padding: 16,
    marginTop: 24,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 8,
  },
  text: {
    color: "#000",
    fontSize: 16,
    marginBottom: 8,
  },
  diskon: {
    marginTop: 8,
    padding: 12,
    backgroundColor: "#0079ca34",
    color: "#0079ca",
    borderRadius: 8,
    fontWeight: "bold",
  },
});

export default OrderSummary;
