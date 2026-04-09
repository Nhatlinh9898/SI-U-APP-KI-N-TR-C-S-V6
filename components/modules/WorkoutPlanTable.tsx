import React from 'react';

interface Workout {
  exercise: string;
  sets: string;
  reps: string;
  rest: string;
}

export const WorkoutPlanTable = ({ title, subtitle, workouts, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {title && <h2 className="text-3xl font-extrabold sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-400">{subtitle}</p>}
        </div>

        <div className="bg-white/5 backdrop-blur-xl rounded-[40px] border border-white/10 overflow-hidden shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className={`bg-${primary_color}-600/20`}>
                <th className="py-6 px-8 font-black uppercase tracking-widest text-xs opacity-60">Bài tập</th>
                <th className="py-6 px-4 font-black uppercase tracking-widest text-xs opacity-60 text-center">Sets</th>
                <th className="py-6 px-4 font-black uppercase tracking-widest text-xs opacity-60 text-center">Reps</th>
                <th className="py-6 px-8 font-black uppercase tracking-widest text-xs opacity-60 text-center">Nghỉ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {workouts?.map((workout: Workout, index: number) => (
                <tr key={index} className="hover:bg-white/5 transition-colors">
                  <td className="py-6 px-8 font-bold text-lg">{workout.exercise}</td>
                  <td className="py-6 px-4 text-center font-black text-xl text-blue-400">{workout.sets}</td>
                  <td className="py-6 px-4 text-center font-black text-xl text-blue-400">{workout.reps}</td>
                  <td className="py-6 px-8 text-center text-gray-400 font-medium">{workout.rest}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-10 flex justify-center">
          <button className={`px-10 py-4 bg-${primary_color}-600 text-white rounded-2xl font-black hover:scale-105 transition-all shadow-xl shadow-${primary_color}-600/30`}>
            Tải lịch tập (PDF)
          </button>
        </div>
      </div>
    </section>
  );
};
