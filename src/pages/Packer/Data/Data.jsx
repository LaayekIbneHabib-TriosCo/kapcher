export const columns = [
  {
    id: "orderid",
    label: "Order ID",
    minWidth: 170,
    align: "center",
  },
  {
    id: "trackingid",
    label: "Tracking ID",
    minWidth: 170,
    align: "center",
  },
  {
    id: "orderidscantime",
    label: "Order ID Scanned Time",
    minWidth: 170,
    align: "center",
  },
  {
    id: "trackingidscantime",
    label: "Tracking ID Scan Time",
    minWidth: 170,
    align: "center",
  },
  {
    id: "shippingcompany",
    label: "Shipping Company",
    minWidth: 170,
    align: "center",
  },
];

function createData(orderid, trackingid, orderidscantime, trackingidscantime, shippingcompany) {
  return {
    orderid,
    trackingid,
    orderidscantime,
    trackingidscantime,
    shippingcompany,
  };
}

export const rows = [
  {
    orderid: "A2232470",
    trackingid: "B2232470",
    orderidscantime: "Mobolaji",
    trackingidscantime: "N10,000",
    shippingcompany: "10:45.20 AM",
  },
  {
    orderid: "A2232471",
    trackingid: "B2232471",
    orderidscantime: "Mobolaji",
    trackingidscantime: "N10,000",
    shippingcompany: "10:45.20 AM",
  },
  {
    orderid: "A2232472",
    trackingid: "B2232472",
    orderidscantime: "Mobolaji",
    trackingidscantime: "N10,000",
    shippingcompany: "10:45.20 AM",
  },
  {
    orderid: "A2232473",
    trackingid: "B2232473",
    orderidscantime: "Mobolaji",
    trackingidscantime: "N10,000",
    shippingcompany: "10:45.20 AM",
  },
  {
    orderid: "A2232474",
    trackingid: "B2232474",
    orderidscantime: "Mobolaji",
    trackingidscantime: "N10,000",
    shippingcompany: "10:45.20 AM",
  },
  {
    orderid: "A223245",
    trackingid: "B2232475",
    orderidscantime: "Mobolaji",
    trackingidscantime: "N10,000",
    shippingcompany: "10:45.20 AM",
  },
  {
    orderid: "A2232476",
    trackingid: "B2232476",
    orderidscantime: "Mobolaji",
    trackingidscantime: "N10,000",
    shippingcompany: "10:45.20 AM",
  },
];
