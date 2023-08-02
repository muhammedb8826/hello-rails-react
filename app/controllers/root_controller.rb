class RootController < ApplicationController
  def index
  end
  def greeting
    @messages = Message.all
  end
end
