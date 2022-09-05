package com.skilldistillery.witchualtracker.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.witchualtracker.entities.Ritual;
import com.skilldistillery.witchualtracker.repositories.RitualRepository;

@Service
public class RitualServiceImpl implements RitualService {

	@Autowired
	private RitualRepository repo;
	
	@Override
	public List<Ritual> index() {
		return repo.findAll();
	}

	@Override
	public Ritual findById(int id) {
		Ritual ritual = new Ritual();
		Optional<Ritual>ritualOpt = repo.findById(id);
		ritual = ritualOpt.get();
		return ritual;
	}

	@Override
	public Ritual createRitual(Ritual ritual) {
		repo.saveAndFlush(ritual);
		return ritual;
	}

	public Ritual updateRitual(int id, Ritual ritual) {
		Ritual updateRitual = new Ritual();
		Optional<Ritual> ritualOpt = repo.findById(id);
		
		updateRitual = ritualOpt.get();
		
		updateRitual.setName(ritual.getName());
		updateRitual.setProperties(ritual.getProperties());
		updateRitual.setIntentions(ritual.getIntentions());
		updateRitual.setWords(ritual.getWords());
		updateRitual.setIngredients(ritual.getIngredients());
		updateRitual.setInstructions(ritual.getInstructions());
		updateRitual.setIdealtime(ritual.getIdealtime());
		
		repo.saveAndFlush(updateRitual);
		return updateRitual;

	}

	@Override
	public boolean deleteById(int id) {
		boolean deleted = false;
		Optional<Ritual> ritualOpt = repo.findById(id);
		if(ritualOpt.isPresent()) {
			repo.deleteById(id);
			deleted = true;
		}
		return false;
	}
	
}
