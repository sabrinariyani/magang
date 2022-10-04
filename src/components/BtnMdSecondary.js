import React from "react";
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../Global.css';

const BtnMdSecondary = (props) => {
  const { namaButton, linkHref, onClick } = props;

  return (
		<a className="btn btnSecondaryMd" type="submit" href={linkHref} onClick={onClick}>
			{namaButton}
		</a>
	);
};

export default BtnMdSecondary;
