import React from "react";
import dayjs from "dayjs";
import Image from "next/image";
import { getRandomInterviewCover } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";
import DisplayTechIcons from "./ui/DisplayTechIcons";

const InterviewCard = async ({
  interviewId,
  userId,
  role,
  type,
  techstack,
  createdAt,
}: InterviewCardProps) => {
  const feedback = null as Feedback | null;
  const normalizedType = /mix/gi.test(type) ? "Mixed" : type;
  const formattedDate = dayjs(
    feedback?.createdAt || createdAt || Date.now()
  ).format("DD/MM/YYYY");
  return (
    <div className="card-border w-[360px] max-sm:w-full min-h-96 mt-4">
      <div className="card-interview">
        <div>
          <div className="absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-light-600">
            <p className="badge-text">{normalizedType}</p>
          </div>

          <Image
            src={getRandomInterviewCover()}
            alt="cover Image"
            width={90}
            height={90}
            className="rounded-full object-fit size-[90px]"
          />

          <h3 className="mt-5 capitalize">{role} Interview</h3>

          <div className="flex flex-row gap-5 mt-3">
            <div className="flex flex-row gap-2 ">
              <Image
                src="./calendar.svg"
                alt="calendar"
                width={22}
                height={22}
              />
              <p>{formattedDate}</p>
            </div>

            <div className="flex flex-row  gap-2 items-center">
              <Image src="./star.svg" alt="start" width={22} height={22} />
            </div>
            <p>{feedback?.totalScore || "---"}/100</p>
          </div>
        </div>
        <p className="line-clamp-2 mt-5">
          {feedback?.finalAssessment ||
            "you have not taken the interview yet.Take it now to improve your interview skills."}
        </p>
      </div>

      <div className="flex flex-row justify-between items-center px-4 py-2">
        <DisplayTechIcons techStack={techstack} />
        <Button className="btn-primary">
          <Link
            href={
              feedback
                ? `/interview/${interviewId}/feedback`
                : `/interview/${interviewId}`
            }
          >
            {feedback ? "Check Feedback" : "View Interview"}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default InterviewCard;
