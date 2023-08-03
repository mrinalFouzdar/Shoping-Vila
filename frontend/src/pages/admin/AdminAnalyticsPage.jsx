import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import AdminLinkscomponent from "../../components/admin/AdminLinkscomponent";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "12:00 AM",
    "2023 year": 4000,
    "2022 year": 4100,
  },
  {
    name: "12:00 AM",
    "2023 year": 4000,
    "2022 year": 4800,
  },
  {
    name: "1:00 AM",
    "2023 year": 4300,
    "2022 year": 4350,
  },
  {
    name: "2:00 AM",
    "2023 year": 4000,
    "2022 year": 4900,
  },
  {
    name: "3:00 AM",
    "2023 year": 5500,
    "2022 year": 5900,
  },
  {
    name: "4:00 AM",
    "2023 year": 7400,
    "2022 year": 8500,
  },
  {
    name: "5:00 AM",
    "2023 year": 8400,
    "2022 year": 9500,
  },
  {
    name: "6:00 AM",
    "2023 year": 10400,
    "2022 year": 14500,
  },
  {
    name: "7:00 AM",
    "2023 year": 20000,
    "2022 year": 25500,
  },
  {
    name: "8:00 AM",
    "2022 year": 28500,
  },
  {
    name: "9:00 AM",
    "2022 year": 29500,
  },
];
const AdminAnalyticsPage = () => {
  const today = new Date();
  const year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();

  // Add leading zeros if month/day is less than 10
  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }

  const maxDate = `${year}-${month}-${day}`;
  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinkscomponent />
      </Col>
      <Col md={10}>
        <h2>Black Friday Cumulative Revenue 31/08/2023 VS 1/08/2022</h2>
        {/* <Form.Group>
          <Form.Label>Selecte First Date To Compare</Form.Label>
          <Form.Control
            type="date"
            name="firstDateToCompate"
            placeholder="First Date To Compare"
          />
        </Form.Group> */}
        <form>
          <div className="form-group">
            <label htmlFor="firstDateToCompare">
              Select First Date To Compare
            </label>
            <input
              type="date"
              className="form-control"
              id="firstDateToCompare"
              name="firstDateToCompare"
              placeholder="First Date To Compare"
              max={maxDate}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <br />
        <Form.Group>
          <Form.Label>Selecte Second Date To Compare</Form.Label>
          <Form.Control
            type="date"
            name="secondDateToCompate"
            placeholder="Second Date To Compare"
          />
        </Form.Group>
        <ResponsiveContainer width="100%" height={500}>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              label={{
                value: "TIME",
                offset: 50,
                position: "insideBottomRight",
              }}
              allowDuplicatedCategory={false}
            />
            <YAxis
              label={{ value: "REVENUE $", angle: -90, position: "insideLeft" }}
            />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <Line
              type="monotone"
              dataKey="2022 year"
              stroke="#8884d8"
              strokeWidth={4}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="2023 year"
              stroke="#82ca9d"
              strokeWidth={4}
            />
          </LineChart>
        </ResponsiveContainer>
      </Col>
    </Row>
  );
};

export default AdminAnalyticsPage;
