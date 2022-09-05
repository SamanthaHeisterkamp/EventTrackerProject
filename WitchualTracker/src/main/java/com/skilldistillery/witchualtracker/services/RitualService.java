package com.skilldistillery.witchualtracker.services;

import java.util.List;

import com.skilldistillery.witchualtracker.entities.Ritual;

public interface RitualService {

	List<Ritual> index();
	
	Ritual findById(int id);

	Ritual createRitual(Ritual ritual);
	
	Ritual updateRitual(int id, Ritual ritual);
	
	boolean deleteById(int id);
	
}
