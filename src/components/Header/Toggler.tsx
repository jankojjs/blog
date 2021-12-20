import styled from "styled-components";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, getTheme } from "../../features/theme/themeSlice";
import { BsMoonStars, BsSun } from "react-icons/bs";

const TogglerStyle = styled.div`
  cursor: pointer;
  border: 1px solid var(--hr);
  border-radius: 10px;
  padding: 6px 8px 4px;
`;

export const Toggler = () => {
  const theme = useSelector(getTheme);
  const dispatch = useDispatch();
  return (
    <HelmetProvider>
      <div onClick={() => dispatch(toggleTheme())}>
        <Helmet>
          <meta
            name="theme-color"
            content={theme === "dark" ? "#91e1a1" : "#135b21"}
            media="(prefers-color-scheme: dark)"
          />
        </Helmet>
        <TogglerStyle>
          {theme === "dark" ? <BsSun size={20} /> : <BsMoonStars size={20} />}
        </TogglerStyle>
      </div>
    </HelmetProvider>
  );
};
