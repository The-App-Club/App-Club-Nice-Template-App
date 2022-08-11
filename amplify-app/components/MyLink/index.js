import styled from "styled-components";
import Link from "next/link";

const StyledLink = styled.a`
  color: palevioletred;
  font-weight: bold;
`;

// https://github.com/vercel/next.js/issues/1942
function MyLink({ href, name }) {
  console.log("MyLink", href, name);
  return (
    <Link href={href}>
      <StyledLink href={href}>{name}</StyledLink>
    </Link>
  );
}

export default MyLink;
