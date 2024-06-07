import React from "react";
import { Card } from "react-bootstrap";

function CampusLocation() {
  return (
    <div>
      <h2 className="mb-3">Campus Location</h2>
      <Card className="w-100 mb-4 shadow-sm">
        <Card.Body>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.8322338660364!2d91.80291421498522!3d24.869578851016843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3751015addbec3b7%3A0x9e87b7be58b5f67e!2sLeading%20University!5e0!3m2!1sen!2sbd!4v1626438111440!5m2!1sen!2sbd"
            width="100%"
            height="450"
            loading="fast"
            title="campus location"
          ></iframe>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CampusLocation;
