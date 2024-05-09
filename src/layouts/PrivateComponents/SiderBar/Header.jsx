import "./SiderBar.css";
import Avatar from "@mui/material/Avatar";
import PropTypes from "prop-types";

export function Header({ show }) {
  return (
    <>
      <div className="header items-center py-2 bg-primary">
        <div className="justify-center flex py-3">
          <Avatar
            alt="Logo"
            src="/assets/images/logo.png"
            sx={
              show
                ? { width: 40, height: 40,}
                : { width: 70, height: 70}
            }
          />
        </div>
        <div className={`flex px-6 ${show ? "hidden" : ""}`}>
          <div className="card-user w-full">
            <p className=" nameuser">Jorge</p>
            <p className=" rol">Administrador</p>
          </div>
        </div>
      </div>
    </>
  );
}

Header.propTypes = {
  show: PropTypes.bool.isRequired,
};
