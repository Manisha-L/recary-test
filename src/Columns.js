const Columns = (props) => [
  {
    Header: "Identification",
    accessor: "Identification",
  },
  {
    Header: "SequenceNumber",
    accessor: "SequenceNumber",
  },
  {
    Header: "Name",
    accessor: "Name",
  },
  {
    Header: "Type",
    accessor: "Type",
  },
  // {
  //   Header: "Photo",
  //   accessor: "Photo",
  // },
  // {
  //   Header: "CustomerSegment",
  //   accessor: "CustomerSegment",
  // },
  // {
  //   Header: "ServiceAndFacility",
  //   accessor: "ServiceAndFacility",
  // },
  // {
  //   Header: "Accessibility",
  //   accessor: "Accessibility",
  // },
  // {
  //   Header: "OtherAccessibility",
  //   accessor: "OtherAccessibility",
  // },
  // {
  //   Header: "OtherServiceAndFacility",
  //   accessor: "OtherServiceAndFacility",
  // },
  // {
  //   Header: "Availability",
  //   accessor: "Availability",
  // },
  // {
  //   Header: "ContactInfo",
  //   accessor: "ContactInfo",
  // },
  // {
  //   Header: "PostalAddress",
  //   accessor: "PostalAddress",
  // },
  <span>
    {new Array(props.value).fill("").map((ignore) => (
      <img
        src={`https://www.ag-grid.com/example-assets/weather/${props.rendererImage}`}
      />
    ))}
  </span>,
];
export default Columns;
