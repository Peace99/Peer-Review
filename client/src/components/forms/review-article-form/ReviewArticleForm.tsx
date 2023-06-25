import React from "react";
import style from "./review.article.form.module.scss";
import { useForm } from "react-hook-form";
import { Api } from "../../../config/api";
import { useLocation } from "react-router-dom";

export function ReviewersGuide() {
  const { state } = useLocation();
  console.log(state);
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data: any) => {
    console.log(data);
    await new Api().createReview(state._id, data);
    window.alert("Review submitted");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container">
      <div className="guideName">
        <h3>Reviewers Guide</h3>
      </div>
      <div className="sectionTwo">
        <div>
          <h4>A. Rate The Following</h4>
          <div className="ratings">
            <div>
              <label htmlFor="question1">
                Is the innovation of the research question adequate?
              </label>
              <div>
                <label>
                  <input
                    {...register("question1")}
                    required
                    type="radio"
                    name="question1"
                    value="excellent"
                  />
                  Excellent
                </label>
                <label>
                  <input
                    {...register("question1")}
                    required
                    type="radio"
                    name="question1"
                    value="good"
                  />
                  Good
                </label>
                <label>
                  <input
                    {...register("question1")}
                    required
                    type="radio"
                    name="question1"
                    value="acceptable"
                  />
                  Acceptable
                </label>
                <label>
                  <input
                    {...register("question1")}
                    required
                    type="radio"
                    name="question1"
                    value="marginal"
                  />
                  Marginal
                </label>
                <label>
                  <input
                    {...register("question1")}
                    required
                    type="radio"
                    name="question1"
                    value="poor"
                  />
                  Poor
                </label>
              </div>
            </div>
            <div>
              <label htmlFor="question2">
                Does the paper demonstrate an adequate understanding of the
                relevant literature in the field?
              </label>
              <div>
                <label>
                  <input
                    {...register("question2")}
                    required
                    type="radio"
                    name="question2"
                    value="excellent"
                  />
                  Excellent
                </label>
                <label>
                  <input
                    {...register("question2")}
                    required
                    type="radio"
                    name="question2"
                    value="good"
                  />
                  Good
                </label>
                <label>
                  <input
                    {...register("question2")}
                    required
                    type="radio"
                    name="question2"
                    value="acceptable"
                  />
                  Acceptable
                </label>
                <label>
                  <input
                    {...register("question2")}
                    required
                    type="radio"
                    name="question2"
                    value="marginal"
                  />
                  Marginal
                </label>
                <label>
                  <input
                    {...register("question2")}
                    required
                    type="radio"
                    name="question2"
                    value="poor"
                  />
                  Poor
                </label>
              </div>
            </div>
            <div>
              <label htmlFor="question3">
                Are the methods and results presented clearly and appropriately?
              </label>
              <div>
                <label>
                  <input
                    {...register("question3")}
                    required
                    type="radio"
                    name="question3"
                    value="excellent"
                  />
                  Excellent
                </label>
                <label>
                  <input
                    {...register("question3")}
                    required
                    type="radio"
                    name="question3"
                    value="good"
                  />
                  Good
                </label>
                <label>
                  <input
                    {...register("question3")}
                    required
                    type="radio"
                    name="question3"
                    value="acceptable"
                  />
                  Acceptable
                </label>
                <label>
                  <input
                    {...register("question3")}
                    required
                    type="radio"
                    name="question3"
                    value="marginal"
                  />
                  Marginal
                </label>
                <label>
                  <input
                    {...register("question3")}
                    required
                    type="radio"
                    name="question3"
                    value="poor"
                  />
                  Poor
                </label>
              </div>
            </div>
            <div>
              <label htmlFor="question4">
                Is the structure of the paper adequate?
              </label>
              <div>
                <label>
                  <input
                    {...register("question4")}
                    required
                    type="radio"
                    name="question4"
                    value="excellent"
                  />
                  Excellent
                </label>
                <label>
                  <input
                    {...register("question4")}
                    required
                    type="radio"
                    name="question4"
                    value="good"
                  />
                  Good
                </label>
                <label>
                  <input
                    {...register("question4")}
                    required
                    type="radio"
                    name="question4"
                    value="acceptable"
                  />
                  Acceptable
                </label>
                <label>
                  <input
                    {...register("question4")}
                    required
                    type="radio"
                    name="question4"
                    value="marginal"
                  />
                  Marginal
                </label>
                <label>
                  <input
                    {...register("question4")}
                    required
                    type="radio"
                    name="question4"
                    value="poor"
                  />
                  Poor
                </label>
              </div>
            </div>
            <div>
              <label htmlFor="question5">
                Does the paper contain significant contribution adequate to
                theory or practice?
              </label>
              <div>
                <label>
                  <input
                    {...register("question5")}
                    required
                    type="radio"
                    name="question5"
                    value="excellent"
                  />
                  Excellent
                </label>
                <label>
                  <input
                    {...register("question6")}
                    required
                    type="radio"
                    name="question5"
                    value="good"
                  />
                  Good
                </label>
                <label>
                  <input
                    {...register("question5")}
                    required
                    type="radio"
                    name="question5"
                    value="acceptable"
                  />
                  Acceptable
                </label>
                <label>
                  <input
                    {...register("question5")}
                    required
                    type="radio"
                    name="question5"
                    value="marginal"
                  />
                  Marginal
                </label>
                <label>
                  <input
                    {...register("question5")}
                    required
                    type="radio"
                    name="question5"
                    value="poor"
                  />
                  Poor
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sectionThree">
        <div>
          <h4>B. Recommendation</h4>
          <div className="recTable">
            <div>
              <label htmlFor="accept">Accept</label>
              <input
                type="radio"
                name="recommendation"
                id="accept"
                value="accept"
              />
            </div>
            <div>
              <label htmlFor="minorRevision">Accept with Minor Revision</label>
              <input
                type="radio"
                name="recommendation"
                id="minorRevision"
                value="minorRevision"
              />
            </div>
            <div>
              <label htmlFor="majorRevision">Requires Major Revision</label>
              <input
                type="radio"
                name="recommendation"
                id="majorRevision"
                value="majorRevision"
              />
            </div>
            <div>
              <label htmlFor="reject">Reject</label>
              <input
                type="radio"
                name="recommendation"
                id="reject"
                value="reject"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="sectionFour">
        <div>
          <h4>C. Additional Comments (Please make suggestions to author)</h4>
          <textarea name="comments" rows={5} cols={50}></textarea>
        </div>
      </div>
      <button>Submit</button>
    </form>
  );
}
