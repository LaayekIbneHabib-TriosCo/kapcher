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
    id: "packedby",
    label: "Packed By",
    minWidth: 170,
    align: "center",
  },
  {
    id: "workstationname",
    label: "Workstation Name",
    minWidth: 170,
    align: "center",
  },
  {
    id: "orderidscantime",
    label: "Order ID Scan Time",
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
    id: "shippedby",
    label: "Shipped By",
    minWidth: 170,
    align: "center",
  },
  {
    id: "video",
    label: "Video",
    minWidth: 170,
    align: "center",
  },
];

function createData(
  orderid,
  trackingid,
  packedby,
  workstationname,
  orderidscantime,
  trackingidscantime,
  shippedby,
  video
) {
  return {
    orderid,
    trackingid,
    packedby,
    workstationname,
    orderidscantime,
    trackingidscantime,
    shippedby,
    video,
  };
}

const play = <img src="assets/play-button.svg" alt="" />;

export const rows = [
  createData(
    "A1232470",
    "B1232470",
    "Godwin",
    "N200,000",
    "10:45.20 AM",
    "10:45.20 AM",
    "Godwin",
    play
  ),
  createData(
    "A2232470",
    "B2232470",
    "Mobolaji",
    "N10,000",
    "10:45.20 AM",
    "10:45.20 AM",
    "Moblaji",
    play
  ),
  createData(
    "A3232470",
    "B3232470",
    "Chikodi",
    "N56,000",
    "10:45.20 AM",
    "10:45.20 AM",
    "Chikodi",
    play
  ),
  createData(
    "A2232470",
    "B2232470",
    "Mobolaji",
    "N10,000",
    "10:45.20 AM",
    "10:45.20 AM",
    "Moblaji",
    play
  ),
  createData(
    "A2232470",
    "B2232470",
    "Mobolaji",
    "N10,000",
    "10:45.20 AM",
    "10:45.20 AM",
    "Moblaji",
    play
  ),
  createData(
    "A1232470",
    "B1232470",
    "Godwin",
    "N200,000",
    "10:45.20 AM",
    "10:45.20 AM",
    "Godwin",
    play
  ),
  createData(
    "A2232470",
    "B2232470",
    "Mobolaji",
    "N10,000",
    "10:45.20 AM",
    "10:45.20 AM",
    "Moblaji",
    play
  ),
  createData(
    "A3232470",
    "B3232470",
    "Chikodi",
    "N56,000",
    "10:45.20 AM",
    "10:45.20 AM",
    "Chikodi",
    play
  ),
  createData(
    "A2232470",
    "B2232470",
    "Mobolaji",
    "N10,000",
    "10:45.20 AM",
    "10:45.20 AM",
    "Moblaji",
    play
  ),
  createData(
    "A2232470",
    "B2232470",
    "Mobolaji",
    "N10,000",
    "10:45.20 AM",
    "10:45.20 AM",
    "Moblaji",
    play
  ),
];
