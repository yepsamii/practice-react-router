import { useTranslation } from "react-i18next";

export default function Index() {
  const {t} = useTranslation();
  const checkOut = 'check-out';
  const docsAt = 'docs-at';
  const demoRouter = 'demo-router';
  return (
    <p id="zero-state">
      {t(demoRouter)}
      <br />
      {t(checkOut)}{" "}
      <a href="https://reactrouter.com">{t(docsAt)} reactrouter.com</a>.
    </p>
  );
}
