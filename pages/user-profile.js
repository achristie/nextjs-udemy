/**
 * @class       : user-profile
 * @author      : awc (awc@$HOSTNAME)
 * @created     : Sunday Apr 18, 2021 15:16:01 EDT
 * @description : user-profile
 */

export default function UserProfile(props) {
  return <h1>{props.userName}</h1>;
}

export async function getServerSideProps(context) {
  return {
    props: {
      userName: "andrew",
    },
  };
}

