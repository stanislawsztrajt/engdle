import React, { FC } from 'react';
import UndrawSecureLogin from 'assets/undraw/undraw_secure_login.svg';
import { Field, Form, Formik } from 'formik';
import useLogin from 'features/auth/login/use-login';
import { Loading } from 'features/ui';
import { Link } from 'react-router-dom';

const Login: FC = () => {
  const { initialValues, validationSchema, login, error, loading } = useLogin();

  return (
    <main className="flex justify-center mt-48">
      <div className="flex flex-col items-center justify-center w-11/12 gap-20 xl:w-4/6 xl:flex-row">
        <section className="w-11/12 lg:w-2/3 xl:w-1/2 animate__animated animate__fadeInLeft">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => login(values)}
          >
            {({ errors, touched }) => (
              <>
                {loading ? (
                  <Loading />
                ) : (
                  <Form>
                    <h1 className="text-4xl">Login to ForumAll</h1>
                    <h2 className="mt-2 font-light text-gray-400">
                      A meeting or medium where ideas and views on a topic can be exchanged and
                      others can be helped. It&apos;s all on ForumAll
                    </h2>

                    <div className="flex flex-col mt-12">
                      <Field
                        type="email"
                        placeholder="Email"
                        name="email"
                        minLength={4}
                        maxLength={50}
                        required
                        className="input-underline"
                      />
                      {errors.email && touched.email ? (
                        <div className="text-red-500">{errors.email}</div>
                      ) : null}
                      <Field
                        type="password"
                        placeholder="Password"
                        name="password"
                        minLength={4}
                        maxLength={50}
                        required
                        className="mt-8 input-underline"
                      />
                      {errors.password && touched.password ? (
                        <div className="text-red-500">{errors.password}</div>
                      ) : null}
                      <div className="mt-1 text-red-500">{error}</div>
                    </div>

                    <div className="flex flex-row items-center justify-between mt-10 text-lg">
                      <div className="flex items-center">
                        <Field
                          id="isRemember"
                          type="checkbox"
                          name="isRemember"
                          className="w-4 h-4 mb-1 ation-100 r-1"
                        />
                        <label className="ml-1" htmlFor="isRemember">
                          Remember me
                        </label>
                      </div>

                      <Link to={'/auth/register'}>
                        <span className="underline duration-100 cursor-pointer hover:text-indigo-600">
                          Register
                        </span>
                      </Link>
                    </div>

                    <button
                      className="w-full py-5 mt-8 text-xl text-white duration-100 bg-indigo-500 rounded-md hover:bg-indigo-600"
                      type="submit"
                    >
                      Log in
                    </button>
                  </Form>
                )}
              </>
            )}
          </Formik>
        </section>
        <img
          className="w-11/12 lg:w-2/3 xl:w-1/2 animate__animated animate__fadeInRight"
          src={UndrawSecureLogin}
        />
      </div>
    </main>
  );
};

export default Login;
