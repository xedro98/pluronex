import { Session, User } from '@/types/auth';

export const getClientSession = async () => {
  // const authjsSession = await getSession();

  // if (authjsSession) {
  //   let user: User | undefined = undefined;
  //   if (authjsSession.user) {
  //     user = {
  //       email: authjsSession?.user?.email,
  //       name: authjsSession?.user?.name,
  //       image: authjsSession?.user?.image,
  //     };
  //   }

  //   const session: Session = {
  //     user: user,
  //     expires: authjsSession.expires,
  //     customAccessToken: authjsSession.customAccessToken,
  //   };

  //   return session;
  // } else {
  let user: User = {
    email: 'default-user',
    image: null,
    name: 'Default User',
  };
  const session: Session = {
    user: user,
    expires: 'never',
    customAccessToken: '',
  };
  return session;
  // }
};

export const getUser = async () => {
  const session = await getClientSession();

  let user = session?.user;

  if (!user) {
    user = {
      email: 'default_user',
      image: null,
      name: 'Default User',
    };
  }

  return user;
};
