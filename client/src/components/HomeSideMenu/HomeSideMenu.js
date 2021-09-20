import React from "react";
import { Table } from "react-bootstrap";
import "./HomeSideMenu.css";

const HomeSideMenu = () => {
  return (
    <div>
      <Table striped bordered className="shadow">
        <tbody>
          <tr className="sideMenuHoVer">
            <td className="p-4">Department of Business Administration</td>
          </tr>
          <tr className="sideMenuHoVer">
            <td className="p-4">Department of CSE</td>
          </tr>
          <tr className="sideMenuHoVer">
            <td className="p-4">Department of English</td>
          </tr>
          <tr className="sideMenuHoVer">
            <td className="p-4">Department of Architecture</td>
          </tr>
          <tr className="sideMenuHoVer">
            <td className="p-4">Department of Law</td>
          </tr>
          <tr className="sideMenuHoVer">
            <td className="p-4">Department of Civil Engineering</td>
          </tr>
          <tr className="sideMenuHoVer">
            <td className="p-4">Department of EEE</td>
          </tr>
          <tr className="sideMenuHoVer">
            <td className="p-4">Department of Islamic Studies</td>
          </tr>
          <tr className="sideMenuHoVer">
            <td className="p-4">Department of Public Health</td>
          </tr>
          <tr className="sideMenuHoVer">
            <td className="p-4">
              Department of Tourism and Hospitality Management
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default HomeSideMenu;
