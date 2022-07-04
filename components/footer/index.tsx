import React from 'react';
import Icon from '../icon';

const BANGUN_LINKEDIN_URL = 'https://www.linkedin.com/company/bangun/';

const Footer = () => (
  <div className="bg-primary-main p-4 text-neutral-10">
    <h2 className="font-semibold text-base">
      PT Nusantara Muda Teknologi Makmur
    </h2>
    <p className="text-base font-normal mt-4">
      One Pacific Place, 15th Floor
      Jl. Jenderal Sudirman No.Kav. 52-53
      Jakarta Selatan, DKI Jakarta 12190
    </p>
    <div className="mt-5">
      <a href={BANGUN_LINKEDIN_URL} target="_blank" rel="noreferrer">
        <Icon icon="linkedin" size={30} />
      </a>
    </div>
    <p className="text-base font-semibold mt-5">
      &copy; 2022 BANGUN!
    </p>
  </div>
);

export default Footer;
