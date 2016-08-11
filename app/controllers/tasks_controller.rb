class TasksController < ApplicationController
	skip_before_filter :verify_authenticity_token

	def index
		@tasks = Task.all
	end

	def create
		render json: Task.create( task_params ), status: 200
	end

	def show
		render json: Task.find(params[:id]), status: 200
	end

	def update
		render json: Task.update(params[:id], task_params)
	end

	def destroy
		render json: Task.destroy(params[:id]), status: 200
	end

	def done 
		task = Task.find(params[:task_id]);
		task.is_active = false;
		task.save();
		render json: task
	end

private
  	def task_params
		params.require(:task).permit(
			:task_id,
			:id,
			:name,
			:is_active
		)
		end
end
